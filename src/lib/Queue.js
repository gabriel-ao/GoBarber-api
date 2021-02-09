import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationMail';
import redisConfig from '../config/redis';

const jobs = [CancellationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  // pra cada job é criado uma fila e dentro dela armazena o bee que conecta com
  // o redis que consegue armazenar e recuperar valores do banco de dados.
  // handle recebe as variaveis do contexto do email (ex: appointment)

  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: {
            url: redisConfig.url,
          },
        }),
        handle,
      };
    });
  }

  // com os dados informados no metodo acima, os jobs são armazenados numa fila
  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  // processando um job em tempo real, por background
  processQueue() {
    jobs.forEach((job) => {
      const { bee, handle } = this.queues[job.key];

      bee.on('failed', this.handleFailure).process(handle);
    });
  }

  handleFailure(job, err) {
    // eslint-disable-next-line no-console
    console.log(`Queue ${job.queue.name}: FAILED`, err);
  }
}

export default new Queue();

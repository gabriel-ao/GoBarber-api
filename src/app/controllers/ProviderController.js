import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const provider = await User.findAll({
      where: { provider: true },
      // attributes serve para retornar apenas os dados que precisa
      attributes: ['id', 'name', 'email', 'avatar_id'],
      // incluse serve para retornar as informações do id FK
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(provider);
  }
}

export default new ProviderController();

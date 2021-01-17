module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    }),

  down: async (queryInterface) =>
    queryInterface.removeColumn('users', 'avatar_id'),
};

// migration para adicionar uma nova coluna a uma tabela

// migration para adicionar um FK (Foreign key === chave estrangeira)
// entre 2 tabelas

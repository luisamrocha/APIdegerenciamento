import Client from '../models/clientModel.js';

export async function criarCliente(req, res) {
  const { nome, email } = req.body;
  const cliente = new Client({ nome, email });

  try {
    await cliente.save();
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar cliente' });
  }
}

export async function obterClientes(req, res) {
  try {
    const clientes = await Client.find();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao buscar clientes' });
  }
}

export async function obterCliente(req, res) {
  const { id } = req.params;

  try {
    const cliente = await Client.findById(id);
    if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao buscar cliente' });
  }
}

export async function atualizarCliente(req, res) {
  const { id } = req.params;
  const { nome, email } = req.body;

  try {
    const cliente = await Client.findByIdAndUpdate(id, { nome, email }, { new: true });
    if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao atualizar cliente' });
  }
}

export async function deletarCliente(req, res) {
  const { id } = req.params;

  try {
    const cliente = await Client.findByIdAndDelete(id);
    if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
    res.status(200).json({ mensagem: 'Cliente deletado com sucesso' });
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao deletar cliente' });
  }
}

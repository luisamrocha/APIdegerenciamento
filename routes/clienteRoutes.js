import { Router } from 'express';
import { criarCliente, obterClientes, obterCliente, atualizarCliente, deletarCliente } from '../controllers/clientController.js';

const router = Router();

router.post('/', criarCliente);
router.get('/', obterClientes);
router.get('/:id', obterCliente);
router.put('/:id', atualizarCliente);
router.delete('/:id', deletarCliente);

export default router;

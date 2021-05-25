import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';
import { Container, TransactionsTypeContainer } from './styles';

interface INewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt='Fechar modal' />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder='Título' />

        <input type='number' placeholder='Valor' />

        <TransactionsTypeContainer>
          <button type='button'>
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </button>
          <button type='button'>
            <img src={outcomeImg} alt='Saída' />
            <span>Saída</span>
          </button>
        </TransactionsTypeContainer>

        <input placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
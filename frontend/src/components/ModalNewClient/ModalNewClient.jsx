import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNewClient } from '../../services/useNewClient';
import Input from '../Input/Input';
import * as S from './Styles';
import { initialErrorState, initialValueFields } from './constants/constants';
import { useHandleChange } from './useHandleChange';

const ModalNewClient = ({ modalNewClient, handleModalNewClient }) => {
  const [error, setError] = useState(initialErrorState);
  const [success, setSuccess] = useState();
  const { formData, setFormData, handleChange } = useHandleChange();
  const { handleSubmit } = useNewClient();

  const onSubmit = async (e) => {
    setError(initialErrorState);
    const res = await handleSubmit(e, formData);
    res.error
      ? setError(res)
      : (setSuccess(true), setFormData(initialValueFields));
  };

  return (
    <>
      <S.NewClient onClick={handleModalNewClient} type="button">
        Adicionar Cliente
      </S.NewClient>
      {modalNewClient && (
        <S.Container $open={modalNewClient}>
          <S.Content $open={modalNewClient}>
            <S.ButtonCloseModal onClick={handleModalNewClient} type="button" />
            <S.ContentTitle>
              <S.Title>Cadastrar Cliente</S.Title>
            </S.ContentTitle>
            <S.ContentForm onSubmit={onSubmit}>
              <Input
                label={'Nome:'}
                id={'nome'}
                type={'text'}
                placeholder={'example name'}
                maxLength={50}
                value={formData.nome}
                onChange={handleChange}
                error={error}
              />
              <Input
                label={'E-mail:'}
                id={'email'}
                type={'email'}
                placeholder={'example@gmail.com'}
                maxLength={50}
                value={formData.email}
                onChange={handleChange}
                error={error}
              />
              <Input
                label={'Telefone:'}
                id={'telefone'}
                type={'text'}
                maxLength={11}
                placeholder={'00 00000-0000'}
                value={formData.telefone}
                onChange={handleChange}
                error={error}
              />
              <Input
                label={'Coordenada X:'}
                id={'coordenada_x'}
                type={'number'}
                maxLength={11}
                placeholder={'0'}
                value={formData.coordenada_x}
                onChange={handleChange}
                error={error}
              />
              <Input
                label={'Coordenada Y:'}
                id={'coordenada_y'}
                type={'number'}
                maxLength={11}
                placeholder={'0'}
                value={formData.coordenada_y}
                onChange={handleChange}
                error={error}
              />
              {success && (
                <S.TextSuccess>Cliente cadastrado com sucesso!</S.TextSuccess>
              )}
              <S.ButtonSubmit type="submit">Cadastrar</S.ButtonSubmit>
            </S.ContentForm>
          </S.Content>
        </S.Container>
      )}
    </>
  );
};
ModalNewClient.propTypes = {
  modalNewClient: PropTypes.bool,
  handleModalNewClient: PropTypes.func,
};
export default ModalNewClient;

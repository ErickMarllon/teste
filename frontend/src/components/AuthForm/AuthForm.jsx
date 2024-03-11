import { useState } from 'react';
import { useAuthenticate } from '../../services/useAuthenticate';
import Input from '../Input/Input';
import FooterForm from './FooterForm';
import * as S from './Styles';
import { formAuthTypes, initialErrorState } from './constants/constants';
import { useHandleChange } from './useHandleChange';

const AuthForm = () => {
  const [currentType, setCurrentType] = useState('login');
  const [error, setError] = useState(initialErrorState);

  const handleAuth = () => {
    setCurrentType(currentType === 'login' ? 'register' : 'login');
    setError({});
  };
  const { formData, handleChange } = useHandleChange(currentType);
  const { handleSubmit } = useAuthenticate(currentType);

  const onSubmit = async (e) => {
    const res = await handleSubmit(e, formData);
    res.error && setError(res);
  };

  return (
    <S.Container>
      <S.ContentTitle>
        <S.Title>{formAuthTypes[currentType].Title}</S.Title>
      </S.ContentTitle>
      <S.ContentForm onSubmit={onSubmit}>
        {currentType === 'login' ? (
          <>
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
              label={'Senha:'}
              id={'senha'}
              type={'password'}
              maxLength={10}
              placeholder={'123aA@'}
              value={formData.senha}
              onChange={handleChange}
              error={error}
            />
          </>
        ) : (
          <>
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
              label={'Senha:'}
              id={'senha'}
              type={'password'}
              maxLength={10}
              placeholder={'123aA@'}
              value={formData.senha}
              onChange={handleChange}
              error={error}
            />
          </>
        )}
        <S.ButtonSubmit type="submit">
          {formAuthTypes[currentType].textSubmit}
        </S.ButtonSubmit>
      </S.ContentForm>
      <FooterForm
        AuthFooterText={formAuthTypes[currentType].textFooter}
        textFooterButton={formAuthTypes[currentType].textFooterButton}
        handleAuth={handleAuth}
      />
    </S.Container>
  );
};

export default AuthForm;

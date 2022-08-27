import {
  StyleSheet,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import background from '../../assets/images/background.png';
import { Button, Form, Input } from '../../components/UI';
import { setUser } from '../../redux/actions/userAction/userAction';

const loginRules = {
  required: 'Логин не может быть пустым',
  pattern: {
    value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
    message: 'Некорректный формат почты',
  },
};

const passwordRules = {
  required: 'Пароль не может быть пустым',
  pattern: {
    value: /^[a-zA-Z0-9]+$/,
    message: 'Пароль может содержать только латинские буквы, цифры',
  },
  minLength: {
    value: 8,
    message: 'Минимальная длина пароля 8 символов',
  },
};

export const Login = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    const { email } = data;
    dispatch(setUser({ email }));
    navigate('Поиск');
    reset();
  };

  return (
    <ScrollView contentContainerStyle={styles.login}>
      <StatusBar theme="auto" />
      <ImageBackground source={background} style={styles.login__background}>
        <Form title="Simple Hotel Check">
          <Input
            errors={errors}
            control={control}
            name="email"
            title="Логин"
            rules={loginRules}
          />
          <Input
            errors={errors}
            control={control}
            name="password"
            title="Пароль"
            rules={passwordRules}
          />
          <Button
            isValid={isValid}
            onSubmit={handleSubmit(onSubmit)}
            title="Войти"
          />
        </Form>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  login__background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});

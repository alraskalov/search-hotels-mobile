import { StyleSheet, View, StatusBar, ImageBackground } from 'react-native';
import { useForm } from 'react-hook-form';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input';
import { Form } from '../components/UI/Form';
import background from '../assets/images/background.png';

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
    console.log(data);
    await AsyncStorage.setItem('user', JSON.stringify(data));
    reset();
  };

  return (
    <View style={styles.login}>
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
          <Button isValid={isValid} onSubmit={handleSubmit(onSubmit)} />
        </Form>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
  },
  login__background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

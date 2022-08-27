import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { fetchHotelsRequest } from '../../redux/actions/hotelAction/hotelAction';

const dateRules = {
  required: 'Поле не может быть пустым',
  min: {
    value: new Date().toLocaleDateString('en-Ca'),
    message: 'Дата не может быть меньшей текущей',
  },
};

const locationRules = {
  required: 'Поле не может быть пустым',
};

const dayCountRules = {
  required: 'Поле не может быть пустым',
  pattern: {
    value: /^\d+$/,
    message: 'Введите число',
  },
};

const Search = ({ navigate }) => {
  const dispatch = useDispatch();
  const dateStart = new Date().toLocaleDateString('en-CA');
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      location: 'Москва',
      date: dateStart,
      dayCount: '1',
    },
  });

  const countingDays = (count) => {
    const [dateStart, dayCount] = getValues(['date', 'dayCount']);

    const selectedDayСount = Number(count) | Number(dayCount);
    const date = new Date(dateStart);
    const futureDate = date.getDate() + selectedDayСount;

    date.setDate(futureDate);
    const dateEnd = date.toLocaleDateString('en-CA');

    return dateEnd;
  };

  const onSubmit = (data) => {
    const { location, date, dayCount } = data;
    const dateEnd = countingDays(dayCount);

    dispatch(fetchHotelsRequest({ location, date, dateEnd, dayCount }));
    navigate('Список отелей');
  };

  return (
    <Form>
      <Input
        title="Локация"
        name="location"
        rules={locationRules}
        control={control}
        errors={errors}
      />
      <Input
        title="Дата заселения"
        name="date"
        rules={dateRules}
        control={control}
        errors={errors}
      />
      <Input
        title="Количество дней"
        name="dayCount"
        rules={dayCountRules}
        control={control}
        errors={errors}
      />
      <Button
        isValid={isValid}
        onSubmit={handleSubmit(onSubmit)}
        title="Найти"
      />
    </Form>
  );
};

export default Search;

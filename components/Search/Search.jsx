import React, { useEffect } from 'react';
import { Button, Form, Input } from '../../components/UI';
import { useForm } from 'react-hook-form';
import { getHotels } from '../../utils/api';

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

const Search = () => {
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

  useEffect(() => {
    const [location, dateStart, dayCount] = getValues([
      'location',
      'date',
      'dayCount',
    ]);
    const dateEnd = countingDays();
    console.log(location, dateStart, dateEnd);
    
    getHotels(location, dateStart, dateEnd).then((data) => {
      console.log(data);
    });
    // dispatch(fetchHotelsRequest({ location, dateStart, dateEnd, dayCount }));
  }, []);

  const onSubmit = (data) => {
    const { location, date, dayCount } = data;
    const dateEnd = countingDays(dayCount);
    console.log(location, date, dateEnd);

    getHotels(location, date, dateEnd).then((data) => {
      console.log(data);
    });

    // dispatch(fetchHotelsRequest({ location, dateStart, dateEnd, dayCount }));
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

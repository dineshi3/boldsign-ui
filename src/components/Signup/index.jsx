import { useForm } from '@mantine/form';
import { Group, TextInput, PasswordInput, Button, Box, Flex } from '@mantine/core';

const Signup = () => {
  const form = useForm({
    initialValues: { name: '', email: '', age: 0, password: 'secret', confirmPassword: 'sevret' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null),
    },
  });

  return (
    <Flex justify={'center'} align='center' mih={'100vh'} p='lg'>
      <Box w={320} mx='auto' my='auto'>
        <form onSubmit={form.onSubmit(console.log)}>
          <TextInput label='Name' placeholder='Name' {...form.getInputProps('name')} />
          <TextInput mt='sm' label='Email' placeholder='Email' {...form.getInputProps('email')} />
          <PasswordInput label='Password' placeholder='Password' {...form.getInputProps('password')} />

          <PasswordInput
            mt='sm'
            label='Confirm password'
            placeholder='Confirm password'
            {...form.getInputProps('confirmPassword')}
          />
          <Group position='right'>
            <Button type='submit' mt='sm'>
              Submit
            </Button>
          </Group>
        </form>
      </Box>
    </Flex>
  );
};

export default Signup;

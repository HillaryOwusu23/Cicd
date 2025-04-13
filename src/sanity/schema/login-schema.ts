import { defineField, defineType } from 'sanity';

export const login = defineType({
  name: 'login',
  title: 'Login',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'loginImage',
      type: 'image',
      title: 'LoginImage',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'signupImage',
      type: 'image',
      title: 'SignupImage',
      options: {
        hotspot: true,
      },
    }),
  ],
});

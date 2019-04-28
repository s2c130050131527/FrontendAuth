import Cookie from 'react-cookies';

export const getCookie = name => {
  return Cookie.load(process.env.REACT_APP_NAME + name + process.env.NODE_ENV);
};

export const setCookie = (name, value) => {
  Cookie.save(name, value, {
    path: process.env.REACT_APP_PUBLIC_URL,
  });
};

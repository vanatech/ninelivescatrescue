import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './index.css';
import { ThemeProvider } from "@material-tailwind/react";
import { customTheme } from "./components/CustomTheme";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <ThemeProvider value={customTheme}>
        <Layout>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </Layout>
      </ThemeProvider>
    );
  }
}

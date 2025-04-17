import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'
import config from './config'

const app = mount(App, {
  target: document.getElementById('app'),
  props: config
})

export default app

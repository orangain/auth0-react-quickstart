import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as enMessages } from './locales/en/messages'
import { messages as jaMessages } from './locales/ja/messages'

const auth0Config = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  redirectUri: window.location.origin,
}

i18n.load('en', enMessages)
i18n.load('ja', jaMessages)
i18n.activate('ja')

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <Auth0Provider {...auth0Config}>
        <App />
      </Auth0Provider>
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

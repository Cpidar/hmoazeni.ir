import VueSocialChat from 'vue-social-chat'
import 'vue-social-chat/dist/style.css'
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(VueSocialChat)
}
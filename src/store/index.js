import { readonly } from 'vue'
import UserModule from './user'
import GlobalModule from './global'

// Leitura do estado, e alteração somente pelas funçoes
export default readonly({
  User: UserModule,
  Global: GlobalModule
}
)

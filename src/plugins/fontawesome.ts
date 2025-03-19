import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUser,
  faCoffee,
  faMagnifyingGlass,
  faStar,
  faHeart,
  faTicket,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

library.add(
  faUser,
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faCoffee,
  faStar,
  faStarRegular,
  faMagnifyingGlass,
  faHeart,
  faTicket
)

export { FontAwesomeIcon }

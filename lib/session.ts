import nookies from 'nookies'
import adminInit from './firebaseConfig/init-admin'

export const authServer =async (ctx : any) => {
    const {idToken} = nookies.get(ctx)
    console.log('token',!!idToken)
  
    try{
      return adminInit.auth().verifyIdToken(idToken)
    } catch(err) {
      return null
    }
} 
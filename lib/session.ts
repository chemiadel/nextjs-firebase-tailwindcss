import nookies from "nookies";
import { GetServerSidePropsContext, NextApiHandler } from "next";
import adminInit from "./firebaseConfig/init-admin";

export const authServer = async (ctx: GetServerSidePropsContext) => {
  const { idToken } = nookies.get(ctx);

  try {
    return adminInit.auth().verifyIdToken(idToken);
  } catch (err) {
    return null;
  }
};

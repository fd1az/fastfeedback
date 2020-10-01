import { getUserSites } from '@/lib/db-admin';
import { auth } from '@/lib/firebase-admin';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  try {
    const { uid } = await auth.verifyIdToken(req.headers.token);
    console.log(uid);
    const sites = await getUserSites(uid);
    console.log(sites);
    res.status(200).json({ sites });
  } catch (error) {
    res.status(500).json({ error });
  }
};

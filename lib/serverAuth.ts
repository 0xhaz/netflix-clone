import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import prismadb from "@lib/prismadb";
import { authOptions } from "@/api/auth/[...nextauth]";

const prisma = new PrismaClient();

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      walletAddress: true,
      signature: true,
      profileId: true,
      favoriteIds: true,
    },
  });

  if (!currentUser) {
    throw new Error("Not signed in");
  }

  return { currentUser };
};

export default serverAuth;

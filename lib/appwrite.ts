import { Account, Avatars, Client, Databases, ID, Query, Storage } from "react-native-appwrite";
import { CreateUserParams, SignInParams,  User  } from "@/type";

export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
  projectID: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
  platform: "com.mk.foodordering",
  databaseId: "6950539000314a5387f8",
  userTableId: "69587449001f86327298",
}

export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectID)
    .setPlatform(appwriteConfig.platform)

export const account = new Account(client);
export const databases = new Databases(client);
const avatars = new Avatars(client);

export const createUser = async ({ email, password, name }: CreateUserParams) => {

  try{
     const newAccount = await account.create(ID.unique(),  email, password, name)
     if(!newAccount) throw Error;

     await signIn({ email, password });

     const avatarUrl = avatars.getInitials(name);

     return await databases.createDocument( 
      appwriteConfig.databaseId, 
      appwriteConfig.userTableId, 
      ID.unique(), 
      {
    nome: name,
    email: email,
    idconta: newAccount.$id,
    avatar: avatarUrl
  }
);


  } catch (e) {
    throw new Error(e as string);
  }
}

export const signIn = async ({ email, password }: SignInParams) => {
  try{
       const session = await account.createEmailPasswordSession(email, password);
  } catch (e) {
    throw new Error(e as string);
  }
}

export const getCurrentUser = async (): Promise<User | null> => {
  try {
     const currentAccount = await account.get();
     if(!currentAccount) return null;

     const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userTableId,
            [Query.equal('idconta', currentAccount.$id)] );

      if(!currentUser || currentUser.documents.length === 0) {
          return null;
      }

      const userDoc = currentUser.documents[0];
      
      // RETORNE EXPLICITAMENTE UM OBJETO DO TIPO User
      return {
          $id: userDoc.$id,
          $createdAt: userDoc.$createdAt,
          $updatedAt: userDoc.$updatedAt,
          nome: userDoc.nome || '',    // ← Garanta que 'nome' existe
          email: userDoc.email || '',  // ← Garanta que 'email' existe
          avatar: userDoc.avatar || '', // ← Garanta que 'avatar' existe
          // Inclua todas as propriedades que Models.Document exige
      } as User;
  } catch (e) {
    console.log(e);
    return null;
  }
}
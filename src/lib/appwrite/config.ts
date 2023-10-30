import { Client, Account , Databases, Storage , Avatars} from 'appwrite'


export const appwriteConfig = {
  projectId : '653b9c598a7ad2d36e7b',
  url : 'https://cloud.appwrite.io/v1',
  databaseId : '653cc9667aed039ff934',
  storageId : '653cc8d07b9b44f9f641',
  userCollectionId : '653ccb1c13b9e90fc9bb',
  postCollectionId : '653cc9d6e4e530cc367b',
  saveCollectionId : '653cccaf6edfd64a1b16',
}


export const client = new Client();

client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("67fdef9b00237174a2f8")
  .setPlatform("dev.netninja.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);




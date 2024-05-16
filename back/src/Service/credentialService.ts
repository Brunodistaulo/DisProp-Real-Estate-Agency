import { CredentialsModel } from "../Config/data-source";

export const createCredentials = async (username: string, password: string) => {
  const credentialsUser = await CredentialsModel.create({ username, password });
  const result = await CredentialsModel.save(credentialsUser);
  return result.id;
};

export const credentialValidation = async (username: string,password: string) => {
  const credentialsUser = await CredentialsModel.findOne({where: { username, password }});
  if (!credentialsUser) {
    throw new Error("Credenciales incorrectas");
  }else{
    return credentialsUser;
  }
};

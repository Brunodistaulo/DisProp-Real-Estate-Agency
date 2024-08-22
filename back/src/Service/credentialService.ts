import { CredentialsModel } from "../Config/data-source";

export const createCredentials = async (email: string, password: string) => {
  const credentialsUser = await CredentialsModel.create({ email, password });
  const result = await CredentialsModel.save(credentialsUser);
  return result;
};

export const credentialValidation = async (email: string,password: string) => {
  const credentialsUser = await CredentialsModel.findOne({where: { email, password }});
  if (!credentialsUser) {
    throw new Error("Credenciales incorrectas");
  }else{
    return credentialsUser.id;
  }
};

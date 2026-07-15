export interface Commercial {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  phone: string;
  fonction: 'JUNIOR' | 'SENIOR';
}
export interface CreateMedicalCenterDTO {
  name: string;
  address: string;
  active?: boolean;
}

export interface UpdateMedicalCenterDTO {
  name?: string;
  address?: string;
  active?: boolean;
}

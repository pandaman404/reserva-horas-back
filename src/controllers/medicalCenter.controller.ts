import { Request, Response } from 'express';
import { prismaClient } from '@config/db';
import {
  CreateMedicalCenterDTO,
  UpdateMedicalCenterDTO
} from 'src/types/medicalCenter.types';

export const getAllMedicalCenters = async (_: Request, res: Response) => {
  try {
    const medicalCenters = await prismaClient.medicalCenter.findMany();
    return res.status(200).json(medicalCenters);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo centros medicos' });
  }
};

export const createMedicalCenter = async (req: Request, res: Response) => {
  try {
    const medicalCenter: CreateMedicalCenterDTO = req.body;

    const newMedicalCenter = await prismaClient.medicalCenter.create({
      data: medicalCenter
    });

    res.status(201).json(newMedicalCenter);
  } catch (error) {
    res.status(500).json({ error: 'Error creando centro medico' });
  }
};

export const updateMedicalCenter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, address, active } = req.body;

    const data: UpdateMedicalCenterDTO = {};

    if (name && name.trim().length > 0) {
      data.name = name.trim();
    }

    if (address && address.trim().length > 0) {
      data.address = address.trim();
    }

    if (typeof active === 'boolean') {
      data.active = active;
    }

    const updatedMedicalCenter = await prismaClient.medicalCenter.update({
      where: { id: Number(id) },
      data
    });

    res.status(201).json(updatedMedicalCenter);
  } catch (error) {
    res.status(500).json({ error: 'Error actualizando centro medico' });
  }
};

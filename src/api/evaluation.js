import {client2} from './client'
export const evaluate = async (evaluationId,request) => {
    try {
        const response = await client2.patch(`/evaluations/${evaluationId}`, request);
        return response.data;
    } catch (error) {
        console.error('Error updating recruitment application:', error);
    }
  };
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatCreatedAt = (createdAt: Date) => {
  return format(createdAt, "h:mm a MMMM dd, yyyy", { locale: ptBR });
};

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  // Se tiver token, clona a requisição e anexa o crachá no cabeçalho invisível
  if (token) {
    const reqClonada = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(reqClonada); // Manda pro backend COM o token
  }

  return next(req); // Manda sem nada
};
export const API_URL = process.env.NODE_ENV === 'production'
  ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/api`
  : 'http://localhost:3131/api';
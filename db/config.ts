import { column, defineDb, defineTable } from "astro:db";

const Comentario = defineTable({
  columns: {
    nombre: column.text(),
    asistir: column.boolean(),
    mensaje: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Comentario },
});

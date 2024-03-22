import { defineDb, defineTable, column } from 'astro:db';

const ClassicMode = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    typeface: column.text(),
    questions: column.json(),
  }
});

export default defineDb({
  tables: { ClassicMode },
})
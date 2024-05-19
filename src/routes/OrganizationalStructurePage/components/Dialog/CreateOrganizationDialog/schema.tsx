import { z } from "zod";

const formSchema = z.object({
  chartTitle: z.string({
    required_error: "Nama organisasi harus diisi",
  }),
  name: z.string({
    required_error: "Nama kepala wajib diisi",
  }),
  position: z.string({
    required_error: "Posisi wajib diisi",
  }),
});

export default formSchema;

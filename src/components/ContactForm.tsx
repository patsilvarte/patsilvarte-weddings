import emailjs from "@emailjs/browser";
import {
    Alert,
    Box,
    CircularProgress,
    MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { WeddingServices } from "../info/types";
import "./ContactForm.scss";
import { Button } from "./general/Button";

type Errors = {
  name?: string;
  email?: string;
  contact_type?: string;
  message?: string;
};

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const validate = (form: HTMLFormElement) => {
    const newErrors: Errors = {};
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const contactType = String(formData.get("contact_type") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name) {
      newErrors.name = "Por favor, indica o teu nome.";
    }

    if (!email) {
      newErrors.email = "Por favor, indica o teu email.";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Por favor, indica um email válido.";
    }

    if (!contactType) {
      newErrors.contact_type = "Por favor, seleciona um serviço.";
    }

    if (!message) {
      newErrors.message = "Por favor, escreve a tua mensagem.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setStatus("idle");

    const form = e.currentTarget;

    if (!validate(form)) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      form.reset();
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <Typography
        variant="h1"
        gutterBottom
        className="HelloJanuaryCyrillicScript"
      >
        Como te podemos ajudar?
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        className="contact-form__box"
        noValidate
      >
        <div className="contact-form__user-info">
          <TextField
            name="name"
            label="Nome"
            required
            error={!!errors.name}
            helperText={errors.name}
            className="contact-form__user-info--half"
            disabled={loading}
          />

          <TextField
            name="email"
            label="Email"
            type="email"
            required
            error={!!errors.email}
            helperText={errors.email}
            className="contact-form__user-info--half"
            disabled={loading}
          />
        </div>

        <TextField
          name="contact_type"
          label="Serviço de interesse"
          select
          required
          fullWidth
          defaultValue={WeddingServices.CONVITES}
          error={!!errors.contact_type}
          helperText={errors.contact_type}
          disabled={loading}
        >
          <MenuItem value={WeddingServices.CONVITES}>
            {WeddingServices.CONVITES}
          </MenuItem>
          <MenuItem value={WeddingServices.SEATING_CHART}>
            {WeddingServices.SEATING_CHART}
          </MenuItem>
          <MenuItem value={WeddingServices.PAINEIS_BOAS_VINDAS}>
            {WeddingServices.PAINEIS_BOAS_VINDAS}
          </MenuItem>
          <MenuItem value={WeddingServices.MENUS}>
            {WeddingServices.MENUS}
          </MenuItem>
          <MenuItem value={WeddingServices.NUMEROS_MESA}>
            {WeddingServices.NUMEROS_MESA}
          </MenuItem>
          <MenuItem value={WeddingServices.ALUGUER}>
            {WeddingServices.ALUGUER}
          </MenuItem>
          <MenuItem value={WeddingServices.LEMBRANÇAS}>
            {WeddingServices.LEMBRANÇAS}
          </MenuItem>
          <MenuItem value={WeddingServices.EXTRAS}>
            {WeddingServices.EXTRAS}
          </MenuItem>
          <MenuItem value="Todos os serviços">Todos os serviços</MenuItem>
        </TextField>

        <TextField
          name="message"
          label="Mensagem"
          multiline
          rows={4}
          fullWidth
          required
          error={!!errors.message}
          helperText={errors.message}
          disabled={loading}
        />

        <Button
          disabled={loading}
          type="submit"
          variant="form"
          className="contact-form__submit"
        >
          {loading ? (
            <>
              <CircularProgress size={18} sx={{ mr: 1 }} />A enviar...
            </>
          ) : (
            "Enviar mensagem"
          )}
        </Button>

        {status === "success" && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Mensagem enviada com sucesso. Iremos responder o mais breve
            possível.
          </Alert>
        )}

        {status === "error" && (
          <Alert severity="error" sx={{ mt: 2 }}>
            Ocorreu algo inesperado. Por favor, tenta novamente.
          </Alert>
        )}
      </Box>
    </div>
  );
};

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FieldError } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { contactSchema, type ContactFormValues } from "@/lib/validators";
import type { Dictionary } from "@/messages/fr";

type ContactFormProps = {
  locale: Locale;
  dictionary: Dictionary;
};

type SubmissionState = "idle" | "success" | "error";

export function ContactForm({ locale, dictionary }: ContactFormProps) {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      cityCountry: "",
      inquiryType: "",
      preferredLanguage: locale,
      website: "",
    },
  });

  const getErrorMessage = (error?: FieldError) => {
    if (!error?.message) {
      return null;
    }

    return (
      dictionary.form.validation[
        error.message as keyof typeof dictionary.form.validation
      ] ?? dictionary.form.feedback.error
    );
  };

  const onSubmit = handleSubmit(async (values) => {
    setSubmissionState("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { ok?: boolean };

      if (!response.ok || !data.ok) {
        throw new Error("Request failed");
      }

      setSubmissionState("success");
      reset({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        cityCountry: "",
        inquiryType: "",
        preferredLanguage: locale,
        website: "",
      });
    } catch {
      setSubmissionState("error");
    }
  });

  return (
    <form className="space-y-5" noValidate onSubmit={onSubmit}>
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">{dictionary.form.labels.website}</label>
        <input
          autoComplete="off"
          id="website"
          tabIndex={-1}
          type="text"
          {...register("website")}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          error={getErrorMessage(errors.fullName)}
          label={dictionary.form.labels.fullName}
          required
        >
          <Input
            aria-invalid={Boolean(errors.fullName)}
            placeholder={dictionary.form.placeholders.fullName}
            {...register("fullName")}
          />
        </Field>

        <Field error={getErrorMessage(errors.company)} label={dictionary.form.labels.company}>
          <Input
            aria-invalid={Boolean(errors.company)}
            placeholder={dictionary.form.placeholders.company}
            {...register("company")}
          />
        </Field>

        <Field
          error={getErrorMessage(errors.email)}
          label={dictionary.form.labels.email}
          required
        >
          <Input
            aria-invalid={Boolean(errors.email)}
            placeholder={dictionary.form.placeholders.email}
            type="email"
            {...register("email")}
          />
        </Field>

        <Field
          error={getErrorMessage(errors.phone)}
          label={dictionary.form.labels.phone}
          required
        >
          <Input
            aria-invalid={Boolean(errors.phone)}
            placeholder={dictionary.form.placeholders.phone}
            type="tel"
            {...register("phone")}
          />
        </Field>

        <Field
          error={getErrorMessage(errors.cityCountry)}
          label={dictionary.form.labels.cityCountry}
        >
          <Input
            aria-invalid={Boolean(errors.cityCountry)}
            placeholder={dictionary.form.placeholders.cityCountry}
            {...register("cityCountry")}
          />
        </Field>

        <Field
          error={getErrorMessage(errors.preferredLanguage)}
          label={dictionary.form.labels.preferredLanguage}
        >
          <Select aria-invalid={Boolean(errors.preferredLanguage)} {...register("preferredLanguage")}>
            {Object.entries(dictionary.form.preferredLanguages).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          error={getErrorMessage(errors.inquiryType)}
          label={dictionary.form.labels.inquiryType}
        >
          <Select aria-invalid={Boolean(errors.inquiryType)} {...register("inquiryType")}>
            {Object.entries(dictionary.form.inquiryTypes).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          error={getErrorMessage(errors.subject)}
          label={dictionary.form.labels.subject}
          required
        >
          <Input
            aria-invalid={Boolean(errors.subject)}
            placeholder={dictionary.form.placeholders.subject}
            {...register("subject")}
          />
        </Field>
      </div>

      <Field
        error={getErrorMessage(errors.message)}
        label={dictionary.form.labels.message}
        required
      >
        <Textarea
          aria-invalid={Boolean(errors.message)}
          placeholder={dictionary.form.placeholders.message}
          {...register("message")}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div aria-live="polite" className="min-h-6 text-sm">
          {submissionState !== "idle" ? (
            <p
              className={cn(
                submissionState === "success"
                  ? "text-brand-primary"
                  : "text-[#8a2a18]",
              )}
            >
              {submissionState === "success"
                ? dictionary.form.feedback.success
                : dictionary.form.feedback.error}
            </p>
          ) : (
            <p className="text-ink-muted">{dictionary.contact.form.privacy}</p>
          )}
        </div>

        <Button disabled={isSubmitting} size="lg" type="submit">
          {isSubmitting
            ? dictionary.form.submit.loading
            : dictionary.form.submit.idle}
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  children: React.ReactNode;
  error?: string | null;
  label: string;
  required?: boolean;
};

function Field({ children, error, label, required = false }: FieldProps) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-ink">
        {label}
        {required ? <span className="ml-1 text-brand-primary">*</span> : null}
      </span>
      {children}
      {error ? <span className="text-sm text-[#8a2a18]">{error}</span> : null}
    </label>
  );
}

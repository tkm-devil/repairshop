"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Save, ClipboardList, FileText, User } from "lucide-react";

import {
  insertTicketSchema,
  type insertTicketSchemaType,
  type selectTicketSchemaType,
} from "@/zod-schemas/ticket";
import { selectCustomerSchemaType } from "@/zod-schemas/customer";

interface TicketFormProps {
  customer: selectCustomerSchemaType;
  ticket?: selectTicketSchemaType;
  onSubmit?: (data: insertTicketSchemaType) => Promise<void>;
  onCancel?: () => void;
}

export default function TicketForm({customer, ticket, onSubmit, onCancel }: TicketFormProps) {
  const [isPending, startTransition] = useTransition();
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const isEditing = Boolean(ticket?.id);

  const form = useForm<insertTicketSchemaType>({
    resolver: zodResolver(insertTicketSchema),
    mode: "onBlur",
    defaultValues: {
      title: ticket?.title ?? "",
      description: ticket?.description ?? "",
      tech: ticket?.tech ?? "",
      customerId: ticket?.customerId ?? customer.id,
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = form;

  const handleFormSubmit = async (data: insertTicketSchemaType) => {
    setSubmitError(null);
    setSubmitSuccess(false);

    startTransition(async () => {
      try {
        if (onSubmit) {
          await onSubmit(data);
          setSubmitSuccess(true);
        } else {
          console.log("Form submitted with data:", data);
          setSubmitSuccess(true);
        }
      } catch (error) {
        setSubmitError(error instanceof Error ? error.message : "An error occurred");
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {isEditing ? `Edit Ticket #${ticket?.id}` : "New Ticket"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isEditing ? "Update ticket details" : "Create a new ticket"}
          </p>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        <p>Customer: <strong>{customer.firstName} {customer.lastName}</strong> (ID: {customer.id})</p>
      </div>

      {submitError && (
        <Alert variant="destructive">
          <AlertDescription>{submitError}</AlertDescription>
        </Alert>
      )}

      {submitSuccess && (
        <Alert className="border-green-200 bg-green-50">
          <AlertDescription className="text-green-800">
            Ticket {isEditing ? "updated" : "created"} successfully!
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
        {/* Hidden field for customerId */}
        <Controller
          name="customerId"
          control={control}
          render={({ field }) => (
            <input type="hidden" {...field} />
          )}
        />

        {/* Ticket Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5" />
              Ticket Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="title"
                    placeholder="Enter ticket title"
                    className={errors.title ? "border-red-500" : ""}
                  />
                )}
              />
              {errors.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    id="description"
                    placeholder="Enter ticket description"
                    rows={4}
                    className={`resize-none ${errors.description ? "border-red-500" : ""}`}
                    value={field.value ?? ""}
                  />
                )}
              />
              {errors.description && (
                <p className="text-sm text-red-500">{errors.description.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tech">Assigned Technician Email *</Label>
              <Controller
                name="tech"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    id="tech"
                    type="email"
                    placeholder="Enter technician's email"
                    className={errors.tech ? "border-red-500" : ""}
                    value={field.value ?? ""}
                  />
                )}
              />
              {errors.tech && (
                <p className="text-sm text-red-500">{errors.tech.message}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
          {onCancel && (
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isPending}
            >
              Cancel
            </Button>
          )}
          <Button
            type="submit"
            disabled={isPending || !isValid}
            className="min-w-[120px]"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {isEditing ? "Updating..." : "Creating..."}
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                {isEditing ? "Update Ticket" : "Create Ticket"}
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

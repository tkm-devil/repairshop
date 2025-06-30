import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
import TicketForm from "./TicketForm";

interface TicketsFormPageProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function TicketsFormPage({ searchParams }: TicketsFormPageProps) {
  const customerId = searchParams.customerId;
  const ticketId = searchParams.ticketId;

  if (!customerId && !ticketId) {
    return (
      <>
        <h2 className="text-2xl mb-2">
          Ticket ID or Customer ID is required to load ticket form
        </h2>
        <BackButton title="Go Back" variant="default" />
      </>
    );
  }

  // Create New Ticket for a Customer
  if (customerId) {
    const customer = await getCustomer(parseInt(customerId));
    if (!customer) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Customer ID #{customerId} not found
          </h2>
          <BackButton title="Go Back" variant="default" />
        </>
      );
    }

    if (!customer.active) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Customer ID #{customerId} is not active
          </h2>
          <BackButton title="Go Back" variant="default" />
        </>
      );
    }

    console.log("Customer:", customer);
    return <TicketForm customer={customer} />;
  }

  // Edit Existing Ticket
  if (ticketId) {
    const ticket = await getTicket(parseInt(ticketId));
    if (!ticket) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Ticket ID #{ticketId} not found
          </h2>
          <BackButton title="Go Back" variant="default" />
        </>
      );
    }

    const customer = await getCustomer(ticket.customerId);
    if (!customer) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Customer for Ticket ID #{ticketId} not found
          </h2>
          <BackButton title="Go Back" variant="default" />
        </>
      );
    }

    console.log("Ticket:", ticket);
    console.log("Customer:", customer);
    return <TicketForm customer={customer} ticket={ticket} />;
  }

  // Should never reach here
  return null;
}

import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";
import CustomerForm from "./CustomerForm";

interface CustomerFormPageProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function CustomerFormPage({ searchParams }: CustomerFormPageProps) {
  const customerId = searchParams.customerId;

  if (customerId) {
    const customer = await getCustomer(parseInt(customerId));

    if (!customer) {
      return (
        <>
          <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
          <BackButton title="Go Back" variant="default" />
        </>
      );
    }

    console.log("Customer loaded:", customer);
    return <CustomerForm customer={customer} />;
  }

  return <CustomerForm />;
}

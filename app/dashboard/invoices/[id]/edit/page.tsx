
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data'
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs'
import EditInvoiceForm from '@/app/ui/invoices/edit-form'
import React from 'react'
import { notFound } from 'next/navigation'

const EditInvoicePage = async (props: { params: Promise<{ id: string }>}) => {
	const params = await props.params;

	// const [invoice, customers] = await Promise.all([
	// 	fetchInvoiceById(params.id),
	// 	fetchCustomers(),
	// ]);

	const customers = await fetchCustomers();
	const invoice = await fetchInvoiceById(params.id)

	if (invoice) {
		notFound()
	}

	return (
		<main>
			<Breadcrumbs breadcrumbs={[
					{label: 'Invoices', href: '/dashboard/invoices'},
					{label: 'Edit Invoice', href: `/dashboard/invoices/${params.id}/edit`}
				]}
			/>
			<EditInvoiceForm customers={customers} invoice={invoice} />
		</main>
	)
}

export default EditInvoicePage
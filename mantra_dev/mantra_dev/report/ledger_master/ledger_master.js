// Copyright (c) 2024, Foram Shah and contributors
// For license information, please see license.txt

frappe.query_reports["Ledger Master"] = {
    "filters": [
        {
            "fieldname": "from_date",
            "label": __("From Date"),
            "fieldtype": "Date",
            "default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
            "reqd": 0
        },
        {
            "fieldname": "to_date",
            "label": __("To Date"),
            "fieldtype": "Date",
            "default": frappe.datetime.get_today(),
            "reqd": 0
        }
    ],
    "formatter": function (value, row, column, data, default_formatter) {
        value = default_formatter(value, row, column, data);
        // Example custom formatting
        if (column.fieldname === "Contact No" && data && data["Contact No"]) {
            value = `<a href="tel:${data["Contact No"]}">${value}</a>`;
        }
        return value;
    }
};

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";
import DatePicker from "tailwind-datepicker-react";

export default function FastRegisterForm() {

    const submit = (e) => {
        e.preventDefault();
        return route('patient.fast.register');
    };

    // datepicker
    const options = {
        title: "تاریخ پذیرش",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        clearBtnText: "پاک کردن",
        maxDate: new Date("2030-01-01").toLocaleDateString('fa-IR'),
        minDate: new Date("1950-01-01").toLocaleDateString('fa-IR'),
        theme: {
            background: "bg-gray-300 dark:bg-gray-800",
            todayBtn: "mx-1 bg-gray-800",
            clearBtn: "mx-1",
            icons: "",
            text: "",
            disabledText: "bg-red-500",
            input: "",
            inputIcon: "",
            selected: "",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span >Previous</span>,
            next: () => <span >Next</span>,
        },
        datepickerClassNames: "top-12",
        defaultDate: new Date(),
        language: "en",
        disabledDates: [],
        weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    }

    const [show, setShow] = useState(false);
	const handleChange = (selectedDate) => {
		console.log(selectedDate)
	}
	const handleClose = (state) => {
		setShow(state)
	}

    return (
        <section>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    پذیرش بیمار جدید
                </h2>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className="flex items-center justify-around w-full">
                    <div className="w-9/12 px-2">
                        <InputLabel htmlFor="name" value="نام" />
                        <TextInput
                            id="name"
                            className="mt-1 w-full"
                            onChange={(e) => console.log(e.target.value)}
                            required
                            placeholder="نام بیمار را وارد کنید"
                            isFocused
                        />
                    </div>
                    <div className="w-9/12 px-2">
                        <InputLabel htmlFor="sure_name" value="نام خانوادگی" />
                        <TextInput
                            id="sure_name"
                            className="mt-1 w-full"
                            onChange={(e) => console.log(e.target.value)}
                            required
                            placeholder="نام خانوادگی بیمار را وارد کنید"
                            isFocused
                        />
                    </div>
                </div>

                <div className="flex items-center justify-around w-full">
                    <div className="w-9/12 px-2">
                        <InputLabel htmlFor="id_no" value="کد ملی" />
                        <TextInput
                            type={'number'}
                            id="id_no"
                            className="mt-1 w-full"
                            onChange={(e) => console.log(e.target.value)}
                            required
                            placeholder="کد ملی بیمار را وارد کنید"
                            isFocused
                        />
                    </div>
                    <div className="w-9/12 px-2">
                        <InputLabel htmlFor="phone" value="شماره تلفن" />
                        <TextInput
                            type={'tel'}
                            id="phone"
                            className="mt-1 w-full"
                            onChange={(e) => console.log(e.target.value)}
                            required
                            placeholder="شماره تلفن بیمار را وارد کنید"
                            isFocused
                        />
                    </div>
                </div>

                <div className="flex items-center justify-around w-full">
                    <div className="w-9/12 px-2">
                        <InputLabel htmlFor="father_name" value="نام پدر" />
                        <TextInput
                            id="father_name"
                            className="mt-1 w-full"
                            onChange={(e) => console.log(e.target.value)}
                            required
                            placeholder="نام پدر بیمار را وارد کنید"
                            isFocused
                        />
                    </div>
                    <div className="w-9/12 px-2">
                        <InputLabel htmlFor="date_time" value="تاریخ پذیرش" />
                        <DatePicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton >پذیرش</PrimaryButton>
                    <p className="text-sm transition ease-in-out opacity-0 animate-none text-gray-600 dark:text-gray-400">
                        با موفقیت پذیرش شد!
                    </p>
                </div>
            </form>
        </section>
    )
}

// DialogComponents.tsx
import React from 'react';
import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';

interface BaseDialogProps {
    open: boolean;
    onClose: (open: boolean) => void;
    children: React.ReactNode;
}

export function Dialog({ open, onClose, children }: BaseDialogProps) {
    return (
        <Transition appear show={open} as={React.Fragment as any}>
            <HeadlessDialog<"div">
                as="div"
                className="relative z-10"
                onClose={onClose}
            >
                {/* Background overlay */}
                <Transition.Child
                    as={React.Fragment as any}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        {children}
                    </div>
                </div>
            </HeadlessDialog>
        </Transition>
    );
}

interface DialogContentProps {
    children: React.ReactNode;
    className?: string;
}

export function DialogContent({ children, className = "" }: DialogContentProps) {
    return (
        <HeadlessDialog.Panel
            className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all ${className}`}
        >
            {children}
        </HeadlessDialog.Panel>
    );
}

interface DialogHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export function DialogHeader({ children, className = "" }: DialogHeaderProps) {
    return <div className={`mb-4 ${className}`}>{children}</div>;
}

interface DialogTitleProps {
    children: React.ReactNode;
    className?: string;
}

export function DialogTitle({ children, className = "" }: DialogTitleProps) {
    return (
        <HeadlessDialog.Title className={`text-lg font-medium leading-6 text-gray-900 ${className}`}>
            {children}
        </HeadlessDialog.Title>
    );
}

interface DialogDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export function DialogDescription({ children, className = "" }: DialogDescriptionProps) {
    return <div className={`text-sm text-gray-600 ${className}`}>{children}</div>;
}

interface DialogCloseProps {
    onClose: () => void;
    className?: string;
}

export function DialogClose({ onClose, className = "" }: DialogCloseProps) {
    return (
        <button
            onClick={onClose}
            className={`absolute top-2 right-2 text-gray-500 hover:text-gray-700 ${className}`}
        >
            ×
        </button>
    );
}

// ContactDialog.tsx
import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust the import path as needed
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose
} from './DialogComponents'; // Adjust the path based on your project structure

interface ContactDialogProps {
    open: boolean;
    onClose: () => void;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogContent>
                <DialogClose onClose={onClose} />
                <DialogHeader>
                    <DialogTitle>Contact Information</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    <p>
                        <strong>Name:</strong> Jose Roberto Juarez
                    </p>
                    <p>
                        <strong>Location:</strong> Laredo, Texas
                    </p>
                    <p>
                        <strong>Phone:</strong> (956) 955-0163
                    </p>
                    <p>
                        <strong>Email:</strong> robertojuarezjose90@gmail.com
                    </p>
                    <p>
                        <strong>LinkedIn:</strong>{' '}
                        <a
                            href="https://www.linkedin.com/in/roberto-juárez-b0b76a225/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Profile
                        </a>
                    </p>
                    <p>
                        <strong>GitHub:</strong>{' '}
                        <a
                            href="https://github.com/robertojuarezjose"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            robertojuarezjose
                        </a>
                    </p>
                </DialogDescription>
                <div className="mt-6 flex justify-end">
                    <Button
                        onClick={onClose}
                        className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                        Close
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ContactDialog;

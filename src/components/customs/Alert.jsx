import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Context } from "@/context/Context";
import { useContext, useState } from "react";

export function Alert({ buttonText, alertTitle, AlertDescription, buttonFunction, buttonClass, buttonDisabled, buttonContent }) {
    const { timeSlot, setTimeSlot } = useContext(Context);
    const disbaledButton = timeSlot == '';
    const [queueJoined, setQueueJoined] = useState(false);
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button disabled={disbaledButton} className={buttonClass} >{disbaledButton ? 'Select Time Slot' : 'Join Queue'}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {AlertDescription}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={buttonFunction}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

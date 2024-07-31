import React, {useState} from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import {CampaignType, WeekDays} from '@/types/Campaign';
import styles from '@/css/CampaignForm.module.css';

interface CampaignFormProps {
    onSubmit: (data: any) => void;
    defaultValues?: any;
}

const CampaignForm: React.FC<CampaignFormProps> = ({ onSubmit, defaultValues = null }) => {
    const { register, handleSubmit, control } = useForm({
        defaultValues: {campaignType: defaultValues?.campaignType,
        schedule: defaultValues?.schedule
        } || {
            campaignType: '',
            schedule: [{ weekDay: '', startTime: '', endTime: '' }],
        },
    });
    const startDate = defaultValues !== null ? new Date(defaultValues?.startDate).toISOString().split('T')[0] : ''
    const endDate = defaultValues !== null ? new Date(defaultValues?.endDate).toISOString().split('T')[0] : ''
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'schedule',
    });


    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Campaign Type</label>
                    <select {...register('campaignType', { required: true })} className={styles.select}>
                        <option value="">Select Type</option>
                        {Object.values(CampaignType).map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Start Date</label>
                    <input type="date" {...register('startDate', { required: true })} className={styles.input}
                           defaultValue={startDate} />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>End Date</label>
                    <input type="date" {...register('endDate', { required: true })} className={styles.input}
                           defaultValue={endDate} />
                </div>
                <div>
                    <label className={styles.label}>Schedule</label>
                    {fields.map((field, index) => (
                        <div key={field.id} className={styles.scheduleContainer}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Weekdays</label>
                                <select
                                    {...register(`schedule.${index}.weekDay`, { required: true })}
                                    className={styles.select}
                                >
                                    <option value="">Select Weekday</option>
                                    {Object.values(WeekDays).map((day) => (
                                        <option key={day} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Start Time</label>
                                <input
                                    type="time"
                                    {...register(`schedule.${index}.startTime`, { required: true })}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>End Time</label>
                                <input
                                    type="time"
                                    {...register(`schedule.${index}.endTime`, { required: true })}
                                    className={styles.input}
                                />
                            </div>
                            <button type="button" onClick={() => remove(index)} className={styles.removeButton}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={() => append({ weekDay: '', startTime: '', endTime: '' })} className={styles.addButton}>
                        Add Schedule
                    </button>
                </div>
                <button type="submit" className={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CampaignForm;

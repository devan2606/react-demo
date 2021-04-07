import React from 'react'
import CreateInterviewButton  from '../../src/components/interview/CreateInterviewButton'
import CreateInterview  from '../../src/components/interview/CreateInterview'
import InterviewTable  from '../../src/components/interview/InterviewTable'

export default function Interviews() {
    return (
        <div>
            <CreateInterviewButton/>
            <CreateInterview/>
            <InterviewTable/>
            
        </div>
    )
}

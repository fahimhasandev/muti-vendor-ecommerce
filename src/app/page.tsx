import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  return (
    <div className='p-4'>
      <div className='flex flex-col gap-y-4'>
        <div>
          <Button variant='elevated'>I am a button</Button>
        </div>
        <div>
          <Input placeholder='I am an Input'></Input>
        </div>
        <div>
          <Progress value={90} />
        </div>
        <div>
          <Textarea></Textarea>
        </div>
        <div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

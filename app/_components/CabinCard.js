import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
function CabinCard({ cabin }) {
  const { id, name, maxCapacity, reqularPrice, discount, image } = cabin;

  return (
    <div className="flex border border-primary-800">
      <div className="relative flex-1">
        <Image
          fill
          src={image}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={`Cabin ${name}`}
          className="flex-1 object-cover border-r border-primary-800"
        />
      </div>
      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="mb-3 text-2xl font-semibold text-accent-500">
            Cabin {name}
          </h3>

          <div className="flex items-center gap-3 mb-2">
            <UsersIcon className="w-5 h-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex items-baseline justify-end gap-3">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${reqularPrice - discount}
                </span>
                <span className="font-semibold line-through text-primary-600">
                  ${reqularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${reqularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="text-right border-t bg-primary-950 border-t-primary-800">
          <a
            href={`/cabins/${id}`}
            className="inline-block px-6 py-4 transition-all border-l border-primary-800 hover:bg-accent-600 hover:text-primary-900"
          >
            Details & reservation &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
